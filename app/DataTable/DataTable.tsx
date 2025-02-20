import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {EventDetails} from '../types/EventDetails.types';// dont use @ cause it means go root directory

//declaring DataTableProps interface
interface DataTableProps {
    data: EventDetails[]; //array of event details 
}

const DataTable = ({data}: DataTableProps)/*this means accept some props*/ => {// the void means return nothing
// {data} means taking in data
    return (
        //this means that it takes rounded border
        <div className="rounded-md border">
            <Table>
                {/* defining data table */}
                {/*this is a comment*/}
                <TableHeader>
                    <TableRow>
                        <TableHead>Event Name</TableHead>
                        <TableHead className="w-[100px]" />
                        {/* The second one is when there is nothing, with width 
                        of a 100 pixels  */}
                    </TableRow>
                </TableHeader>
                <TableBody> {/* Init table body */}
                    {/* Was using undefined as return type as 
                    per tutorial but did not worked, tried using 
                    <TableRow> but failed too, now using any*/}
                    {data.map((EventDetails: {name:string}): any => (
                        <TableRow key={EventDetails.name}>
                            <TableCell className="font-medium">{EventDetails.name}</TableCell> 
                        </TableRow>
                    ))}
                    {/* https://youtu.be/NfNjj-pZV30
                            This part talked about adding button for 
                            no action but we skipped this, can refer/add 
                            if needed*/}
                </TableBody>
            </Table>
        </div>
    )
};

export default DataTable;