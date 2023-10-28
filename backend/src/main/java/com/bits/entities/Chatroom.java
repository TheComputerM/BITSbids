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
@Table (name = "chatrooms")
public class Chatroom extends PanacheEntityBase {

    @Id
    @GeneratedValue
    public UUID id;

    public UUID product_id;

    public UUID buyer_id;

    public Instant buyer_last_read;

    public Instant seller_last_read;

}
