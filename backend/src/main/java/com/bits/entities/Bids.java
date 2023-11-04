package com.bits.entities;

import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bids")
public class Bids extends PanacheEntityBase {

    @Id
    @GeneratedValue
    public UUID id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    public Product product;

    @ManyToOne
    @JoinColumn(name = "bidder_id")
    public User bidder;

    public Integer amount;

    @Column(name = "created_at")
    @CreationTimestamp
    public Instant createdAt;

}