import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { ChevronLeft, ChevronRight } from 'react-feather'

const PaginationCard = () => {
    return (
        <Pagination className='d-flex mt-3'>
            <PaginationItem>
                <PaginationLink href='#' first>
                    <ChevronLeft size={15} /> Prev
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>2</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#' last>
                    Next
                    <ChevronRight size={15} />
                </PaginationLink>
            </PaginationItem>
        </Pagination>
    )
}
export default PaginationCard
