package me.nasif.adt.server.resources;

import com.codahale.metrics.annotation.Timed;
import me.nasif.adt.server.models.Movie;
import java.util.Arrays;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
public class MovieResource {

    @GET
    @Timed
    @Path("/movies")
    @Produces(MediaType.APPLICATION_JSON)
    public List getMovies() {
        return Arrays.asList(
                new Movie("Mystic River"),
                new Movie("Blood Diamond")
        );
    }

}
