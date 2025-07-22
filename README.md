The backend:

    Motoko (later Rust)
        -Storing encrypted passwords (json blob) with honeypots and stuff
        -Basic functionality:
            -Send/retrieve encrypted blob to/from frontend
            -Initialize/remove blob


The frontend:
    Javascript (logic + interactivity)
    css, html (surprise surprise)

        -All the crypto logic in here. Encrypting, decrypting, KDF, adding, retrieving, removing passwords, configuring honeypots happens here.


Backend never sees any plaintext, it's responsible purely for hosting persistent data on IC.