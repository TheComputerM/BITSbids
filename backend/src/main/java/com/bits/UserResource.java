package com.bits;

import java.util.List;
import java.util.UUID;

import com.bits.entities.User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;

@Path("/user")
public class UserResource {

  @GET
  public List<User> getAll() {
    return User.listAll();
  }

  @POST
  @Transactional
  @Consumes(MediaType.APPLICATION_JSON)
  public UUID create(User user) {
    user.persist();
    return user.id;
  }
}
