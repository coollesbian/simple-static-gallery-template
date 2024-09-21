# The Simple Static Gallery Template.

## How does it work?

1. `git clone` the repo
2. Put your images in `/imgs/`
3. Edit the image source and name for each `.gallery-entry`
4. Edit the text inside each tag however you need it. You can remove titles or publish dates if you don't need them.
5. Replace the datetime. The ISO standard is YYYY-MM-DD
6. If you need additional entries, duplicate the text between these comments and edit:
```html
    <!-- start of one gallery entry. To duplicate, start here. -->
         <div class="gallery-entry">
              <div class="centerer">
                  <img src="./imgs/image1.jpg">
              </div>
              <div class="title">Image Title</div>
              <div class="caption small">
                     <time datetime="2021-10-15">October 15, 2021</time>
              </div>
        </div>
    <!-- End of the gallery entry. -->
```
8. `git stage` your changes, `git commit` them, then `git push` them to the server.

If you're already set to use Github Pages, your website should be live in minutes.

## Set up Github Pages for your repo

**Go to the Settings tab for your repo.**

![image](https://github.com/user-attachments/assets/172a292c-9812-469c-9ded-ec7fc4578528)

**On the toolbar on the left, hit Pages.**

![image](https://github.com/user-attachments/assets/bec4bd9e-1cfb-4346-85de-4ebc6e80faaa)

**Set your pages branch to "main".**

![image](https://github.com/user-attachments/assets/532a4890-60da-4bf2-bb1c-aefd31fbf887)

**That's it. After you press save, an option for a custom domain will show up, with a link to very very good documentation showing how to configure your DNS for Github Pages.**

![image](https://github.com/user-attachments/assets/b4664c0d-4798-4842-a62c-ecb190bac3dd)
