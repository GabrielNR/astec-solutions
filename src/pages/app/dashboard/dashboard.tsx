
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table'
import { OrderTableRow } from './components/order-table-row'
import { OrderTableFilters } from './components/order-table-filters'
import { Pagination } from 'src/components/pagination'

export function Dashboard() {
  return (
    <>
      <title>Serviços | Astec Solutions</title>

      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Serviços</h1>

        {/* Main */}
        <div className="space-y-2.5">
          
          {/* Component TableFilters */}
          <OrderTableFilters />

          {/* Tables */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="w-[180px]">Equipament</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return (
                    <OrderTableRow key={i}/>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <Pagination 
          pageIndex={0} 
          totalCount={105} 
          perPage={10}
        />
      </div>
    </>
  )
}
