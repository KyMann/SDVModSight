package org.SDVModSight.SDVModSight.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by KyleLaptop on 12/13/2017.
 */

@Controller
public class DropInController {

    @RequestMapping(value="", method= RequestMethod.GET)
    public String index(Model model) {


        return "index";
    }

}
