import {render,screen} from '@testing-library/react'
import Hello from './Hello'
import { expect } from 'vitest'

describe('check components..', ()=>{
    it('start checking', async () => {
        render(<Hello/>)
        expect(screen.getByText('Hello')).toBeInTheDocument()
    })
})