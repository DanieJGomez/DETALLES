function renderFooter() {
    document.body.insertAdjacentHTML("beforeend", `
        <footer class="footer">
            <div class="footer-content">
                <div>
                    <h4 class="footer-title">Detalles</h4>
                    <p><i>slogan</i></p>
                </div>
                <div>
                    <h4 class="footer-title">Contacto</h4>
                    <a href="correo" target="_blank">
                        <p><i class="bx bx-envelope"></i> Email: ----</p>
                    </a>
                    <a href="https://www.google.com/maps/place/Cl.+10+%2324,+Bogotá/@4.599821,-74.0802027,19z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9909aeac2ef9:0x595e05a7cb3f2be2!8m2!3d4.599821!4d-74.079559!16s%2Fg%2F11nnks_4bh?hl=es&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <i class="bx bx-map"></i> Ubicación: ---
                    </a>
                    <a href="tel:+57 322 9659471" aria-label="Llamar a Alexstin Fashion">
                        <p><i class="bx bx-phone"></i> Teléfono: -----</p>
                    </a>
                </div>
                <div>
                    <h4 class="footer-title">Síguenos</h4>
                    <div class="footer-links">
                        <a href="facebook"><i class="bx bxl-facebook"></i> Facebook</a>
                        <br><br>
                        <a href="instagram"><i class="bx bxl-instagram"></i> Instagram</a>
                        <br><br>
                        <a href="tiktok"><i class="bx bxl-tiktok"></i> Tik Tok</a>
                    </div>
                </div>
            </div>
        </footer>
    `);
}
