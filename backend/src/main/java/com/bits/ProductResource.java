package com.bits;

import java.util.UUID;
import com.bits.entities.Product;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/api/product")
public class ProductResource {

  @GET
  public Response getAll() {
    return Response.ok(Product.listAll()).build();
  }

  @POST
  @Transactional
  public UUID create(Product product) {
    product.persist();
    return product.id;
  }
}
