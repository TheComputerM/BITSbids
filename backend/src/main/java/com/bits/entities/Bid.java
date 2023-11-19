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
@Table(name = "bid")
public class Bid extends PanacheEntityBase {

    @Id
    @GeneratedValue
    public UUID id;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    public Product product;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    public User bidder;

    public Integer amount;

    @Column(name = "created_at")
    @CreationTimestamp
    public Instant createdAt;
}