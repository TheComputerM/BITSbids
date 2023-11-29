package com.bits;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint("/ws/chatroom/{chatroom}/{userSession}")
@ApplicationScoped
public class ChatSocket {
  Map<String, Map<String, Session>> sessions = new ConcurrentHashMap<>();

  @OnOpen
  public void onOpen(Session session, @PathParam("chatroom") String chatroom,
      @PathParam("userSession") String userSession) {
    if (!sessions.containsKey(chatroom)) {
      sessions.put(chatroom, new ConcurrentHashMap<>());
    }
    sessions.get(chatroom).put(userSession, session);
  }

  @OnClose
  public void onClose(Session session, @PathParam("chatroom") String chatroom,
      @PathParam("userSession") String userSession) {
    sessions.get(chatroom).remove(userSession, session);
    if (sessions.get(chatroom).isEmpty()) {
      sessions.remove(chatroom);
    }
  }

  @OnError
  public void onError(Session session, @PathParam("chatroom") String chatroom, Throwable throwable) {
    sessions.remove(chatroom);
  }

  @OnMessage
  public void onMessage(String content, @PathParam("chatroom") String chatroom,
      @PathParam("userSession") String userSession) {
    broadcast(chatroom, content);
  }

  private void broadcast(String chatroom, Object message) {
    Map<String, Session> chatroomSessions = sessions.get(chatroom);
    chatroomSessions.values().forEach(s -> s.getAsyncRemote().sendObject(message, result -> {
      if (result.getException() != null) {
        System.out.println("Unable to send message: " + result.getException());
      }
    }));
  }
}
