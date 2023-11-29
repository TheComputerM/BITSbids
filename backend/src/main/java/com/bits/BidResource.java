package com.bits;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import com.bits.entities.Bid;
import com.bits.entities.User;
import com.bits.entities.Product;
import com.bits.projections.BidProductView;

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

  @Path("/{id}")
  @GET
  public Response getBid(UUID id) {
    Bid bid = Bid.findById(id);
    if (bid == null) {
      return Response.status(400, "Bid not found").build();
    }
    return Response.ok(bid).build();
  }

  @POST
  @Transactional
  public Response create(Bid bid) {
    User bidder = User.findById(bid.bidder.id);
    Product product = Product.findById(bid.product.id);
    if (bidder == null || product == null) {
      return Response.status(400, "Cannot find product or bidder").build();
    }
    Instant now = Instant.now();
    if (now.compareTo(product.endingAt) > 0 || product.sold) {
      return Response.status(400, "Product has been sold").build();
    }
    if (bid.bidder.id == product.seller.id) {
      return Response.status(400, "Seller cannot bid on their own product").build();
    }
    if (bid.amount > bidder.balance) {
      return Response.status(400, "User does not have the required balance to make the bid").build();
    }
    List<Bid> previousBids = Bid.find("from Bid where product.id = ?1 order by amount DESC limit 1", product.id).list();
    if (previousBids.size() == 0) {
      if (bid.amount < product.basePrice) {
        return Response.status(400, "Bid amount cannot be less than the base price").build();
      }
    } else {
      Bid winningBid = previousBids.get(0);
      if (bid.amount <= winningBid.amount) {
        return Response.status(400, "Bid amount is not enough to beat the current winning bid").build();
      }
      User previousWinner = User.findById(winningBid.bidder.id);
      previousWinner.balance += winningBid.amount;
    }
    if (bid.amount >= product.autoSellPrice) {
      product.sold = true;
    }
    bidder.balance -= bid.amount;
    bid.persist();
    return Response.ok(bid.id).build();
  }
}
