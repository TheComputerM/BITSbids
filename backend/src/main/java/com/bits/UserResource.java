package com.bits;

import com.bits.entities.User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.PATCH;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/api/user")
public class UserResource {

  @GET
  public Response getAll() {
    return Response.ok(User.listAll()).build();
  }

  @GET
  @Path("/{id}")
  public Response get(String id) {
    User user = User.findById(id);
    if (user == null) {
      return Response.status(400, "User not found").build();
    }
    return Response.ok(user).build();
  }

  @PATCH
  @Transactional
  @Path("/{id}")
  public User update(String id, User updatedUser) {
    User user = User.findById(id);
    user.id = id;
    user = updatedUser;
    return user;
  }
}
