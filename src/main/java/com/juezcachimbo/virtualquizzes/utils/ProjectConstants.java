package com.juezcachimbo.virtualquizzes.utils;

import java.util.Locale;

public final class ProjectConstants {



    public static final String DEFAULT_ENCODING = "UTF-8";

    public static final Locale PERU_LOCALE = new Locale.Builder().setLanguage("es").setRegion("PE").build();

    private ProjectConstants() {

        throw new UnsupportedOperationException();
    }

}
