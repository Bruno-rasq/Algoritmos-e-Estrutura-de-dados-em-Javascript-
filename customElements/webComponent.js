class starRater extends HTMLElement {

    constructor()
    {
        super()

        this.build()
    }

    build()
    {

        // attachShadow é responsável por criar a shadow DOM
        const shadow = this.attachShadow({mode: 'open'})

        shadow.appendChild(this.styles())

        const rater = this.createRater()
        const stars = this.createStars()

        stars.forEach((star) => rater.appendChild(star))

        shadow.appendChild(rater)

    }

    createRater()
    {

        const rater = document.createElement('div')
        rater.classList.add('star-rater')

        return rater
    }

    createStars()
    {

        const createStar = ( _, index) => {

            const star = document.createElement('span')
            star.classList.add('star')
            star.setAttribute('data-value', Number(index) + 1)
            star.innerHTML = `&#9733;`

            return star
        }

        return Array.from({ length: 5 }, createStar)
    }

    styles()
    {

        const style = document.createElement('style')
        style.textContent = `
        
        .star-rater {
            background-color: #f00;
        }
        `

        return style
    }
}

customElements.define('star-rater', starRater)