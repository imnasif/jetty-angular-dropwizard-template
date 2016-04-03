package me.nasif.adt.server.resources;

import com.codahale.metrics.annotation.Timed;
import me.nasif.adt.server.models.Book;
import java.util.Arrays;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
public class BookResource {

    @GET
    @Timed
    @Path("/books")
    @Produces(MediaType.APPLICATION_JSON)
    public List getBooks() {
        return Arrays.asList(
                new Book("Robinson Crusoe"),
                new Book("To killl a mocking bird")
        );
    }

}
