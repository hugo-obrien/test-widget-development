package ru.vintersaga.demos.widget;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api")
public class ApiController {

    @GetMapping("/")
    public String helloWorld() {
        return "Hello World!";
    }
}
