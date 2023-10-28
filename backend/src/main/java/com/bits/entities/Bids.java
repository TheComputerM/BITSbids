package com.bits.entities;

import java.time.Instant;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bids")
public class Bids extends PanacheEntityBase {

    @Id
    @GeneratedValue
    public UUID id;

    @GeneratedValue
    @Column
    public UUID product_id;
    // to be made foreign key later

    @GeneratedValue
    @Column
    public UUID bidder_id;
    // to be made foreign key later

    @Column(columnDefinition = "integer default 0")
    public Integer amount;

    @Column
    @CreationTimestamp
    public Instant created_at;

}