package com.bits;

import com.bits.entities.Product;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;

@Path("/api/search")
public class SearchResource {
  @QueryParam("search")
  String searchFor;

  @GET
  public Response getProducts() {
    return Response.ok(Product.find("name", "%" + searchFor + "%").list()).build();
  }
}
