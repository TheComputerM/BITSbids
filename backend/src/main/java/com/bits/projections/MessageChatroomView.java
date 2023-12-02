package com.bits.projections;

import io.quarkus.runtime.annotations.RegisterForReflection;
import java.time.Instant;
import java.util.UUID;
import com.bits.entities.User;


@RegisterForReflection
public class MessageChatroomView {
    public final UUID id;
    public final String content;
    public final User sender;
    public final Instant sentAt;

    public MessageChatroomView(UUID id, User sender, String content, Instant sentAt){
        this.id=id;
        this.sender=sender;
        this.content=content;
        this.sentAt=sentAt;
    }
    

}
