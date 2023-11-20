package com.bits.entities;

import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product extends PanacheEntityBase {
  @Id
  @GeneratedValue
  public UUID id;

  @ManyToOne
  @OnDelete(action = OnDeleteAction.CASCADE)
  public User seller;

  public String name;

  @Column(columnDefinition = "TEXT")
  public String description;

  public String[] attachments;

  @Column(name = "base_price")
  public Integer basePrice;

  @Column(name = "auto_sell_price")
  public Integer autoSellPrice;

  public Boolean sold;

  @Column(name = "ending_at")
  public Instant endingAt;

  @Column(name = "created_at", updatable = false)
  @CreationTimestamp
  public Instant createdAt;
}
