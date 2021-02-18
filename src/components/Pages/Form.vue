<template>
    <section id="contact" class="padd-section wow fadeInUp">
        <div class="section-title text-center">
                <h2> Eğitmenimiz Olmak İster Misiniz?</h2>
                <div class="wrapper wrapper--w900">
                    <div class="card card-6">
                        <div class="card-body">
                            <form method="POST">
                                <div class="form-row">
                                    <div class="name">Adınız</div>
                                    <div class="value">
                                        <input class="input--style-6" type="text" name="full_name">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Mail Adresiniz</div>
                                    <div class="value">
                                        <div class="input-group">
                                            <input class="input--style-6" type="email" name="email" placeholder="example@gmail.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Eğitim Verebileceğiniz Alan </div>
                                    <div class="value">
                                        <div class="input-group">
                                            <textarea class="textarea--style-6" name="message" ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="name">Alanınızla İlgili Dosya</div>
                                    <div class="value">
                                        <div class="input-group js-input-file">
                                            <input class="input-file" type="file" name="file_cv" id="file">
                                            <label class="label--file" for="file">Dosya Seç</label>
                                            <span class="input-file__info">Dosya Seçilmedi</span>
                                        </div>
                                        <div class="label--desc">Dosyanızın maksimum boyutu 50 MB olmalıdır.</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn--radius-2 btn--blue-2" type="submit">GÖNDER</button>
                        </div>
                    </div>
                </div>
         </div>
    </section><!-- #contact -->

</template>
