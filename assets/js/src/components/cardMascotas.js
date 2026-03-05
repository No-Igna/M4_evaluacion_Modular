export class Componentes {
  static crearTarjetaMascota(mascota) {
    return `
    <div class="card border-0 shadow-sm mb-3">
      <div class="card-body p-3">

        <div class="d-flex justify-content-between align-items-start">

          <!-- Info Mascota -->
          <div class="flex-grow-1">

            <!-- Nombre -->
            <h5 class="fw-semibold mb-2">
              <i class="fa-solid fa-paw text-primary me-2"></i>
              ${mascota.nombre}
            </h5>

            <div class="row g-2">

              <!-- Evolución -->
              <div class="col-md-6">
                <div class="bg-light rounded p-2">
                  <small class="text-muted d-block">
                    <i class="bi bi-clipboard-pulse me-1"></i>
                    Evolución médica
                  </small>
                  <span class="fw-medium">
                    ${mascota.evolucionMedica}
                  </span>
                </div>
              </div>

              <!-- Tutor -->
              <div class="col-md-6">
                <div class="bg-light rounded p-2">
                  <small class="text-muted d-block">
                    <i class="bi bi-person-check me-1"></i>
                    Tutor
                  </small>
                  <span class="fw-medium">
                    ${mascota.tutor}
                  </span>
                </div>
              </div>

            </div>

          </div>

          <!-- Estado -->
          <div class="ms-3">
            <span class="badge rounded-pill bg-danger px-3 py-2">
              <i class="bi bi-check-circle me-1"></i>
              Alta
            </span>
          </div>

        </div>

      </div>
    </div>
    `;
  }
}
