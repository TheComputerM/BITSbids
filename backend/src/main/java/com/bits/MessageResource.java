package com.bits;

import java.util.UUID;

import java.util.List;

import com.bits.entities.Chatroom;
import com.bits.entities.Message;


import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/api/messages")
public class MessageResource {
    @POST
    @Transactional
    public UUID create(Message message) {
        message.persist();
        return message.id;
    }

    @GET
    public Response getAllMessages(){
        
        return Response.ok(Message.listAll()).build();
    }



    @Path("/{id}")
    @GET
    public Response getMessage(UUID id) {
    Message message = Message.findById(id);
    if (message == null) {
      return Response.status(400, "message not found").build();
    }
    return Response.ok(message).build();
  }

}
