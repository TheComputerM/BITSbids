package com.bits.entities;

import java.util.UUID;
import java.util.List;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User extends PanacheEntityBase {
  @Id
  @GeneratedValue
  public UUID id;

  public String name;

  public String avatar;

  public Integer balance;

  @OneToMany(mappedBy = "seller", fetch = FetchType.LAZY)
  public List<Product> products;

}
