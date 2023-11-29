package com.bits;

import java.util.List;

import org.jboss.resteasy.reactive.RestHeader;

import com.bits.entities.Chatroom;
import com.bits.entities.Product;
import com.bits.entities.User;

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
  @Path("/in")
  public Response getInChatrooms() {
    User user = User.findByBearer(bearerToken);
    List<Chatroom> chatrooms = Chatroom.find("product.seller", user).list();

    return Response.ok(chatrooms).build();
  }

  @GET
  @Path("/out")
  public Response getOutChatrooms() {
    User user = User.findByBearer(bearerToken);
    List<Chatroom> chatrooms = Chatroom.find("buyer", user).list();

    return Response.ok(chatrooms).build();
  }

  @GET
  @Path("/{roomId}")
  public Response getChatroom(String roomId) {
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
}
