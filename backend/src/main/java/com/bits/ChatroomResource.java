package com.bits;

import java.util.List;
import java.util.UUID;

import org.jboss.resteasy.reactive.RestHeader;

import com.bits.entities.Chatroom;
import com.bits.entities.Message;
import com.bits.entities.Product;
import com.bits.entities.User;
import com.bits.projections.MessageChatroomView;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/api/chatroom")
public class ChatroomResource {
  @RestHeader("Authorization")
  String bearerToken;

  @GET
  public Response getAllChatrooms() {
    User user = User.findByBearer(bearerToken);
    List<Chatroom> chatrooms = Chatroom.find("buyer", user).list();
    
    return Response.ok(chatrooms).build();
  }

  @GET
  @Path("/{roomId}")
  public Response getChatroom(UUID roomId) {
    return Response.ok(Chatroom.findById(roomId)).build();
  }

  @POST
  @Transactional
  public Response createChatroom(Product product) {
    User user = User.findByBearer(bearerToken);

    Chatroom existingChatroom = Chatroom.find("buyer = ?1 and product = ?2", user, product).firstResult();
    if (existingChatroom != null) {
      return Response.ok(existingChatroom.id).build();
    }

    Chatroom chatroom = new Chatroom();
    chatroom.product = product;
    chatroom.buyer = user;
    chatroom.persist();
    return Response.ok(chatroom.id).build();
  }

  @GET
  @Path("/{roomId}/messages")
  public Response getMessages(UUID roomId){
    List<MessageChatroomView> messages = Message.find("from Message where room.id = ?1 order by sentAt",roomId).project(MessageChatroomView.class).list();
    return Response.ok(messages).build();

  }
}
