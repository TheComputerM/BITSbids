package com.bits;

import java.util.List;
import java.util.UUID;

import com.bits.entities.Message;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;

@Path("/message")
public class MessageResource{

    @GET
    public List<Message> getAll(){
        return Message.listAll();
    }

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public UUID create(Message message) {
        message.persist();
        return message.id;
    }
}