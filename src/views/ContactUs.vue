<template>
  <main>
    <section class="py-5">
      <div class="container">
        <h1 class="text-center">Contact</h1>
        <div class="ratio ratio-16x9 mt-4 bg-light"></div>
        <div class="mt-5" role="grid">
          <div class="grid gap-4" role="row">
            <div class="g-col-12 g-col-lg-4" role="gridcell">
              <h2 class="h2">Contact Info</h2>
              <div class="mt-1 text-secondary fs-5">Main Branch: Buendia Gil Puyat Pasay</div>
              <div class="mt-4">
                <label class="small fw-bold text-secondary text-uppercase" for="store">Store</label>
                <address id="store">1999 Sen. Gil Puyat Avenue, (Buendia Avenue) Pasay City, Philippines 1300</address>
              </div>

              <div class="mt-4">
                <div>
                  <label for="landline">Landline:&nbsp;</label>
                  <span id="landline">(632) 7940-3144</span>
                </div>

                <div>
                  <label for="landline">Globe:&nbsp;</label>
                  <span id="landline">+63 915 507 4717</span>
                </div>

                <div>
                  <label for="landline">Smart:&nbsp;</label>
                  <span id="landline">+63 960 890 4263</span>
                </div>
              </div>

              <div class="mt-4">
                <label class="small fw-bold text-secondary text-uppercase" for="store-office-hours">Store Office Hours</label>
                <div id="store-office-hours">Monday to Saturday: 8:30AM to 6:00PM</div>
              </div>

              <div class="mt-4">
                <label class="small fw-bold text-secondary text-uppercase" for="mall-office-hours">Mall Office Hours</label>
                <div id="mal-office-hours">Monday to Sunday: 11AM to 10PM</div>
              </div>
            </div>

            <div class="d-none vr d-lg-block"></div>

            <div class="g-col-12 g-col-lg-7" role="gridcell">
              <h2 class="h2">Drop us a line</h2>
              <form class="mt-4 vstack gap-3">
                <div class="grid gap-3">
                  <div class="g-col-12 g-col-lg-4">
                    <label class="visually-hidden" for="name">Your name</label>
                    <input class="form-control" id="name" type="text" placeholder="Your Name *" />
                  </div>

                  <div class="g-col-12 g-col-lg-4">
                    <label class="visually-hidden" for="email">Your email</label>
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" />
                  </div>

                  <div class="g-col-12 g-col-lg-4">
                    <label class="visually-hidden" for="phone">Your phone</label>
                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone" />
                  </div>
                </div>

                <div>
                  <input class="form-control" type="text" placeholder="Subject (Optional)" />
                </div>

                <div>
                  <textarea class="form-control" type="text" placeholder="Write your message here" rows="8"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted: () => {
    document.title = 'Contact Us'
  },
}
</script>
