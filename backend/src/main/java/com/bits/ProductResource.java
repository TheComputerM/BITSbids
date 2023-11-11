package com.bits;

import java.util.List;
import java.util.UUID;

import com.bits.entities.Product;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/api/product")
public class ProductResource {

  @GET
  public List<Product> getAll() {
    return Product.listAll();
  }

  @POST
  @Transactional
  public UUID create(Product product) {
    product.persist();
    return product.id;
  }
}
