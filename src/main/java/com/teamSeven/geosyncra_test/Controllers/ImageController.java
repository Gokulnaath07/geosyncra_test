package com.teamSeven.geosyncra_test.Controllers;

import com.teamSeven.geosyncra_test.Repository.ImageRes;
import com.teamSeven.geosyncra_test.Services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.security.GeneralSecurityException;

@RestController
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/uploadToGoogleDrive")
    public Object handleFileUpload(@RequestParam("name") String name,
                                   @RequestParam("description") String description,
                                   @RequestParam("location") String location,
                                   @RequestParam("image") MultipartFile file)
            throws IOException, GeneralSecurityException {
        // Log incoming parameters to verify their presence
        System.out.println("Received name: " + name);
        System.out.println("Received description: " + description);
        System.out.println("Received location: " + location);
        System.out.println("Received file: " + (file != null ? file.getOriginalFilename() : "No file uploaded"));

        if (file.isEmpty()) {
            return "File is empty";
        }
        File tempFile = File.createTempFile("temp", null);
        file.transferTo(tempFile);
        ImageRes imageRes = imageService.uploadImageToDrive(tempFile, name, description, location);
        System.out.println(imageRes);
        return imageRes;
    }

}
