import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify} from 'vuetify'

const vuetify = createVuetify({
  ssr: true,
})
export default createVuetify({
    display: {
      mobileBreakpoint: 'sm',
      thresholds: {
        xs: 0,
        sm: 340,
        md: 540,
        lg: 800,
        xl: 1280,
      },
    },
})