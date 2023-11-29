package com.bits.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User extends PanacheEntityBase {
  @Id
  @GeneratedValue
  public String id;

  public String name;

  public String avatar;

  public Integer balance;

  public static User findBySession(String session) {
    User user = (User) getEntityManager().createNativeQuery(
        String.format("select * from users where id = (select user_id from user_session where id = '%s')", session),
        User.class).getSingleResult();
    return user;
  }

  public static User findByBearer(String bearerToken) {
    return User.findBySession(bearerToken.substring(7));
  }
}
