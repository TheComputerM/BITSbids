package com.bits.projections;

import java.time.Instant;
import java.util.UUID;

import com.bits.entities.User;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class BidProductView {
  public final UUID id;
  public final User bidder;
  public final Integer amount;
  public final Instant createdAt;

  public BidProductView(UUID id, User bidder, Integer amount, Instant createdAt) {
    this.id = id;
    this.bidder = bidder;
    this.amount = amount;
    this.createdAt = createdAt;
  }
}
