package com.bits.entities;

import java.util.UUID;
import java.time.Instant;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "message")
public class Message extends PanacheEntityBase {
  @Id
  @GeneratedValue
  public UUID id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "room_id")
  public Chatroom room;

  @Lob
  public String content;

  public String caption;

  @Column(name = "sent_at")
  @CreationTimestamp
  public Instant sentAt;
}