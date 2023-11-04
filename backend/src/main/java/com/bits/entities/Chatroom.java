package com.bits.entities;

import java.time.Instant;
import java.util.List;
import java.util.UUID;


import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table (name = "chatrooms")
public class Chatroom extends PanacheEntityBase {

    @Id
    @GeneratedValue
    public UUID id;

    public Product product;

    public User buyer;

    @Column(name = "buyer_last_read")
    public Instant buyerLastRead;

    @Column(name = "seller_last_read")
    public Instant sellerLastRead;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    public List<Message> messages;
}
