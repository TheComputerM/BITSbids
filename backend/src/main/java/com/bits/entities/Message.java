package com.bits.entities;

import java.util.UUID;
import java.time.Instant;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "message")
public class Message extends PanacheEntityBase {
  @Id
  @GeneratedValue
  public UUID id;

  @ManyToOne
  @OnDelete(action = OnDeleteAction.CASCADE)
  public User sender;

  @ManyToOne
  @OnDelete(action = OnDeleteAction.CASCADE)
  public Chatroom room;

  @Column(columnDefinition = "TEXT")
  public String content;

  public String attachment;

  @Column(name = "sent_at")
  @CreationTimestamp
  public Instant sentAt;
}