package com.bits;

import java.util.List;

import com.bits.entities.User;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/user")
public class UserResource {

  @GET
  public List<User> getAll() {
    return User.listAll();
  }
}
