package com.bits.entities;

import java.util.UUID;
import java.time.Instant;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="message")
public class Message extends PanacheEntityBase{
    @ID
    @GeneratedValue
    public UUID id;

    @Column
    @GeneratedValue
    public UUID roomid;

    @Column
    public String contents;

    @Column
    public String caption;

    @Column
    @CreationTimestamp
    public Instant sentAt;
}