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
        this.stars = this.createStars()
        this.stars.forEach((star) => rater.appendChild(star))

        this.resetRating()

        shadow.appendChild(rater)

    }

    createRater()
    {

        const rater = document.createElement('div')
        rater.classList.add('star-rater')
        rater.addEventListener('mouseout', this.resetRating.bind(this))

        return rater
    }

    createStars()
    {

        const createStar = ( _, index) => {

            const star = document.createElement('span')
            star.classList.add('star')
            star.setAttribute('data-value', Number(index) + 1)
            star.innerHTML = `&#9733;`

            star.addEventListener( 'click', this.setRating.bind(this) )
            star.addEventListener( 'mouseover', this.ratingHover.bind(this) )

            return star
        }

        return Array.from({ length: 5 }, createStar)
    }

    resetRating()
    {
        this.currentRatingValue = this.getAttribute('data-rating') || 0
        this.highLightRating()
    }

    setRating(event)
    {
        this.setAttribute(
            'data-rating', event.currentTarget.getAttribute('data-value')
        )
    }

    ratingHover(event)
    {
        this.currentRatingValue = event.currentTarget.getAttribute('data-value')
        this.highLightRating()
    }

    highLightRating()
    {
        this.stars.forEach( star => {

            star.style.color = this.currentRatingValue >= star.getAttribute('data-value')
             ? 'yellow' 
             : 'gray'
        })
    }

    styles()
    {

        const style = document.createElement('style')
        style.textContent = `
        
        .star {
            font-size: 1.8rem;
            color: gray;
            cursor: pointer;
        }
        `

        return style
    }
}

customElements.define('star-rater', starRater)