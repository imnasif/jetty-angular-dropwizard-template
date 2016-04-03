package me.nasif.adt.server;

import me.nasif.adt.server.resources.BookResource;
import me.nasif.adt.server.resources.MovieResource;
import io.dropwizard.Application;
import io.dropwizard.setup.Environment;

public class App extends Application<Config> {

    public static void main(final String[] args) throws Exception {
        new App().run(args);
    }

    @Override
    public String getName() {
        return "adt-server";
    }

    @Override
    public void run(Config config, Environment env) throws Exception {
        env.jersey().register(new MovieResource());
        env.jersey().register(new BookResource());
    }

}
