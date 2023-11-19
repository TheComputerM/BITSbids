package com.bits;

import java.util.List;
import java.util.UUID;

import com.bits.entities.Bid;
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

  @Path("/{id}")
  @GET
  public Response getProduct(UUID id) {
    Product product = Product.findById(id);
    if (product == null) {
      return Response.status(400, "Product not found").build();
    }
    return Response.ok(product).build();
  }

  @Path("/{id}/bids")
  @GET
  public Response getProductBids(UUID id) {
    List<Bid> bids = Bid.find("select b from Bid b where b.product.id = ?1 order by b.createdAt DESC", id).list();
    return Response.ok(bids).build();
  }

  @POST
  @Transactional
  public UUID create(Product product) {
    product.persist();
    return product.id;
  }
}
