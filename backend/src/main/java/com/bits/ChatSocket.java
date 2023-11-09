package com.bits;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint("/chatroom/{chatroom}")
@ApplicationScoped
public class ChatSocket {
  Map<String, Session> sessions = new ConcurrentHashMap<>();
}
