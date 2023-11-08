package com.bits;

import java.util.List;
import java.util.UUID;

import com.bits.entities.Bid;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;

@Path("/bids")
public class BidsResource {

  @GET
  public List<Bid> getAll() {
    return Bid.listAll();
  }

  @POST
  @Transactional
  @Consumes(MediaType.APPLICATION_JSON)
  public UUID create(Bid bids) {
    bids.persist();
    return bids.id;
  }
}
