package com.bits.entities;

import java.util.UUID;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User extends PanacheEntityBase {
  @Id
  @GeneratedValue
  public UUID id;

  @Column(nullable = false)
  public String name;

  @Column(columnDefinition = "integer default 0")
  public Integer balance;
}
