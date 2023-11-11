package com.bits;

import java.util.List;
import java.util.UUID;

import com.bits.entities.Bid;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/api/bid")
public class BidResource {

  @GET
  public List<Bid> getAll() {
    return Bid.listAll();
  }

  @POST
  @Transactional
  public UUID create(Bid bid) {
    bid.persist();
    return bid.id;
  }
}
