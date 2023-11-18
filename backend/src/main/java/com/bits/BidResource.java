package com.bits;

import java.util.UUID;

import com.bits.entities.Bid;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/api/bid")
public class BidResource {

  @GET
  public Response getAll() {
    return Response.ok(Bid.listAll()).build();
  }

  @POST
  @Transactional
  public UUID create(Bid bid) {
    bid.persist();
    return bid.id;
  }
}
