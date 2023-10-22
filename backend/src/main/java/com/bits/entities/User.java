package com.bits.entities;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue
  public UUID id;

  @Column(nullable = false)
  public String name;

  @Column(nullable = false, columnDefinition = "int default 0")
  public Integer balance;
}
