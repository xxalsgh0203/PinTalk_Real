package com.pintalk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class PintalkApplication {


	public static void main(String[] args) {
		SpringApplication.run(PintalkApplication.class, args);
	}


}
