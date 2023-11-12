package com.bits;

import java.util.List;

import com.bits.entities.User;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.PATCH;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.WebApplicationException;

@Path("/api/user")
public class UserResource {

  @GET
  public List<User> getAll() {
    return User.listAll();
  }

  @GET
  @Path("/{id}")
  public User get(String id) {
    User user = User.findById(id);
    if (user == null) {
      throw new WebApplicationException(404);
    }
    return user;
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
